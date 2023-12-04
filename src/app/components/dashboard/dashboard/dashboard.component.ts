import { Component, OnInit } from '@angular/core';
// import { ChatService } from 'src/app/shared/services/chat/chat.service';
import * as chartData from '../../../shared/data/dashboard';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { Job } from 'src/app/shared/models/job.model';
import { UserService } from 'src/app/shared/services/users/user.service';
import { StatisticsService } from 'src/app/shared/services/statistics.service';

import { User } from 'src/app/shared/models/auth.models';
import { DateService } from 'src/app/shared/services/date.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { PayloadService } from 'src/app/shared/services/requests/payload.service';
import { environment } from 'src/environments/environment.prod';
import { StatisticsPayload } from 'src/app/shared/models/statistics.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public total_jobs: number = 0;
  public jobs: Array<Job> = new Array<Job>()

  public total_users: number = 0;
  public users: Array<User> = new Array<User>()
  public statistics: Array<StatisticsPayload> = new Array<StatisticsPayload>()

  public static: any

  public access: any;
  public today_visit: any
  public percentage_change: 0;
  public previous_month_visits: 0;

  constructor(
    // private chatService: ChatService,
    private http: HttpClient,
    private authService: AuthenticationService,
    private userService: UserService,
    private dateService: DateService,
    private requestService: PayloadService,
    private statisticsService: StatisticsService
  ) {


  }

  ngOnInit(): void {


    // console.log("Token Data: ", this.authService.token())

    // this.loadJobs();
    // this.loadUsers();
    // this.loadStatistics()

    this.access = this.authService.check(this.authService.USER_ACCESS)

  }

  // loadJobs() {


  // }

  // loadStatistics() {
  //   let $this = this

  //   this.statisticsService.all(`page-visits`, function (result, status) {
  //     console.log(result, 'result')
  //     if (status) {
  //       $this.static = result
  //       $this.today_visit = result && result.today_visits ? result.today_visits : 0;
  //       $this.percentage_change = result && result.percentage_change ? result.percentage_change : 0;
  //       $this.previous_month_visits = result && result?.previous_month_visits ? result?.previous_month_visits : 0;



  //     }

  //   })


  // }

  // loadUsers() {

  //   let $this = this

  //   this.userService.all(function (result, status) {

  //     if (status) {
  //       $this.users = result
  //       $this.total_users = result.length || 0
  //     }

  //   })
  // }

  formatToday() {

    let date = new Date();
    return this.dateService.formatEnUSWithOption(date)
  }

  formatDate(date: string) {

    // var d = new Date(date);
    return this.dateService.formatDate(date)
  }

  // public profile_image = `https://api.ambulance.uk/profile/images/user_default.jpeg`;

  // profile(user_id) {

  //   let profile = `https://api.ambulance.uk/storage/profile/images/user_${user_id}.jpeg`;
  //   let $this = this;
  //   this.authService.imageExists(profile, function (exists) {

  //     console.log("Image Response:::::", exists)
  //     if (exists) {
  //       return profile;
  //     }
  //     else {
  //       return $this.profile_image;
  //     }

  //   })
  // }

  // setImage(path: string, userid: string) {

  //   let path_image = `user_${userid}.jpeg`
  //   this.requestService.request(path + path_image, {}, this.requestService.TYPE_GET, function () {
  //     path_image = path
  //   })

  //   return path_image;
  // }

  //line Chart
  // public lineChartOptions = chartData.lineChartOptions;
  // public lineChartLabels = chartData.lineChartLabels;
  // public lineChartType = chartData.lineChartType;
  // public lineChartLegend = chartData.lineChartLegend;
  // public lineChartData = chartData.lineChartData;

  // //Bar chart
  // public barChartOptions = chartData.barChartOptions;
  // public barChartLabels = chartData.barChartLabels;
  // public barChartType = chartData.barChartType;
  // public barChartData = chartData.barChartData;
  // public barChartColors = chartData.barChartColors;


}


