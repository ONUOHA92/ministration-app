import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/shared/services/date.service';
import { Message } from 'src/app/shared/services/message/message.model';
import { MessageService } from 'src/app/shared/services/message/message.service';

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './mail-inbox.component.html',
  styleUrls: ['./mail-inbox.component.scss']
})
export class MailInboxComponent implements OnInit {

  public is_mailview: boolean = false;


  public page = 1;
  public config: any = {
    currentPage: 1,
    pageSize: 10,
    maxSize: 5
  };

  public messages: Array<Message> = new Array<Message>()

  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private dateService: DateService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {

    this.load()
  }

  open(content) {

    this.modalService.open(content, { size: "xl" })
  }

  load() {

    let $this = this

    this.messageService.all("inbox", function (result, status) {


      if (!result) {
        return

      }
      $this.messages = result;

    })

  }

  /**
   * 
   * @param $event 
   * This receive update from the textarea-editor event on change
   */
  getEditorMessage($event) {

    this.mail.message = $event;
  }

  public mail: Mail = new Mail()

  onSend($event) {

    console.log("Checking things:: ", this.mail.message)

    if (!this.mail.email) {
      this.toastService.info("Please, enter email receipient(s)")
      return;
    }
    if (!this.mail.subject) {
      this.toastService.info("Please, enter email subject")
      return;
    }
    if (!this.mail.message) {

      this.toastService.info("Please, email message cannot be empty")
      return;
    }

    let $this = this
    this.messageService.create("inbox", this.mail, function (result, status) {
      console.log('Result', result, status);
      if (!result) {

        $this.toastService.error("Unable to send your email message")
        return
      }
      $this.toastService.success("Email Successfully sent")
    })
  }

  format_date(date: string) {

    return this.dateService.formatEnUSWithOption(date)
  }


  /**
   * Selected Message should change the view of the project
   */
  public selected_message: Message = new Message()
  onSelectMail(message: Message) {

    this.selected_message = message;
    this.is_mailview = true;
  }

  onInboxClicked() {

    this.is_mailview = false;
  }

  getMessage(message: any) {

    let mes = JSON.parse(message)

    console.log(message, mes.mail.message)

    return mes.mail.message
  }

  removeTags(str) {



    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();

    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
  }



}

class Mail {
  public email: string
  public subject: string
  public message: string
  public cc: string;
  public bcc: string
}
