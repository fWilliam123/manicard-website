import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { Status, AccountType } from '../../../../shared/enums';
import { ManagementPartnerService, MemberTypeMappingService, StatusMappingService } from '../../../../shared/services';
import { MemberType } from '../enums';
import { User } from '../interfaces';
import { UserDetailComponent } from './components/dialogs/user-detail/user-detail.component';
import { UserDetailInput } from './interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };
  searchForm: FormGroup;
  dataSource: MatTableDataSource<DisplayableUser>;
  displayedColumns: string[];
  fake: User;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private readonly managementPartnerService: ManagementPartnerService,
    readonly translate: TranslateService,
    private readonly dialog: MatDialog,
    private readonly statusMappingService: StatusMappingService,
    private readonly memberTypeMappingService: MemberTypeMappingService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = [
      'manicardNumber',
      'firstname',
      'memberType',
      'createDate',
      'message',
      'status',
      'actions'
    ];

    this.dataSource = new MatTableDataSource<DisplayableUser>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._initForm();
    this.getUsers();
  }

  getUsers(): void {
    // TODO: Remove when API is done
    this.dataSource.data = [
      {
        code: 'ddddd',
        firstname: 'wil',
        memberTypeTranslationkey: this.memberTypeMappingService.translationKey(MemberType.BLUE),
        createDate: new Date(),
        message: 'sssss',
        statusClass: this.statusMappingService.statusClass(Status.ACTIVE),
        statusTranslationKey: this.statusMappingService.translationKey(Status.ACTIVE)
      }, {
        code: 'ffffff',
        firstname: 'wi2l',
        memberTypeTranslationkey: this.memberTypeMappingService.translationKey(MemberType.BRONZE),
        createDate: new Date(),
        message: '***',
        statusClass: this.statusMappingService.statusClass(Status.INACTIVE),
        statusTranslationKey: this.statusMappingService.translationKey(Status.INACTIVE)
      }, {
        code: 'rrrrrr',
        firstname: 'wil3',
        memberTypeTranslationkey: this.memberTypeMappingService.translationKey(MemberType.BRONZE),
        createDate: new Date(),
        message: 'tesssssss',
        statusClass: this.statusMappingService.statusClass(Status.ACTIVE),
        statusTranslationKey: this.statusMappingService.translationKey(Status.ACTIVE)
      }
    ];

    // TODO: give a correct params
    this.managementPartnerService.getUsers('ss').pipe(
      map<User[], DisplayableUser[]>(users => users.map<DisplayableUser>(
        user => ({
          code: user.Code,
          firstname: user.Firstname,
          // TODO: Update to correct key
          message: user.Title,
          statusClass: this.statusMappingService.statusClass(user.Status),
          statusTranslationKey: this.statusMappingService.translationKey(user.Status),
          memberTypeTranslationkey: this.memberTypeMappingService.translationKey(user.MemberType),
          createDate: user.CreateDate
        })
      ))
    ).subscribe({
      next: (users): void => {
        this.dataSource.data = users
      }
    })
  }

  onSearch(): void {

  }

  onEditUser(_: User): void {
    // TODO: Remove when API is done
    const _user: User = {
      Code: 'sssss',
      Email: 'sssss@dddd.ddd',
      MemberType: MemberType.BLUE,
      Title: 'dddddd',
      CreateDate: new Date(),
      IsOnline: true,
      Id: 3,
      Firstname: 'xxxxx',
      Lastname: 'ssssss',
      Phone: '4555555555',
      Password: 'ssssss',
      Status: Status.ACTIVE,
      BannedReason: 'sssssss',
      AccountType: AccountType.Shop,
      CompletionPercent: 23,
      AvailableCredit: 34,
      BarcodeImage: [],
      Name: 'ddddddd'
    };

    const _data: UserDetailInput = {
      user: _user,
    }

    this.dialog.open<UserDetailComponent, UserDetailInput>(UserDetailComponent, {
      data: _data,
      width: '50em'
    })
  }

  private _initForm(): void {
    this.searchForm = new FormGroup({
      cardNumber: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl('', [Validators.email])
    });
  }

}

interface DisplayableUser {
  code: string;
  firstname: string;
  memberTypeTranslationkey: string;
  createDate: Date;
  message: string;
  statusTranslationKey: string;
  statusClass: string;
}
