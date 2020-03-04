import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ObjectType, Status, UserGroupType } from '../../../../shared/enums';
import { CardItem } from '../../../../shared/interfaces';
import { UserGroupTypeMappingService } from '../../../../shared/services';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {

  searchForm: FormGroup;
  cardItems: CardItem[];
  ObjectType = ObjectType;
  displayablesUserGroupType: DisplayableUserGroupType[];

  constructor(
    private readonly userGroupTypeMappingService: UserGroupTypeMappingService
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._initUserGroupTypes();

    this.cardItems = [
      {
        id: 1,
        image: this.getUserGroupImage(UserGroupType.SPORT),
        title: 'Club de sport',
        subtitle: `${20} ${marker('user_management.user_group.members')}`,
        status: Status.ACTIVE
      },
      {
        id: 2,
        image: this.getUserGroupImage(UserGroupType.COMMUNITY_ASSOCIATION),
        title: 'Association des camerounais de Montreal',
        subtitle: `${45} ${marker('user_management.user_group.members')}`,
        status: Status.PENDING
      },
      {
        id: 3,
        image: this.getUserGroupImage(UserGroupType.STUDENT),
        title: 'College Brebeuf',
        subtitle: `${50} ${marker('user_management.user_group.members')}`,
        status: Status.INACTIVE
      },
      {
        id: 4,
        image: this.getUserGroupImage(UserGroupType.WORKER),
        title: 'Garage Laval Expert',
        subtitle: `${13} ${marker('user_management.user_group.members')}`,
        status: Status.ACTIVE
      }
    ]
  }

  trackByCardItem(_: number, item: CardItem): string {
    return item.title;
  }

  onSearch(): void {

  }

  getUserGroupImage(groupType: UserGroupType): string {
    switch (groupType) {
      case UserGroupType.COMMUNITY_ASSOCIATION:
        return 'assets/images/association.png';
      case UserGroupType.SPORT:
        return 'assets/images/club.png';
      case UserGroupType.STUDENT:
        return 'assets/images/students.png';
      case UserGroupType.WORKER:
        return 'assets/images/worker.png';
      case UserGroupType.OTHER:
        return 'assets/images/students.png';
      default:
        throw new Error(`Invalid groupType: ${groupType}`);
    }
  }

  displayableUserGroupType(_: number, userGroup: DisplayableUserGroupType): UserGroupType {
    return userGroup.key;
  }

  private _initForm(): void {
    this.searchForm = new FormGroup({
      groupName: new FormControl(''),
      groupType: new FormControl(''),
      groupID: new FormControl(''),
      memberManicardNumber: new FormControl('')
    });
  }

  private _initUserGroupTypes(): void {
    const groups: UserGroupType[] = [UserGroupType.COMMUNITY_ASSOCIATION, UserGroupType.OTHER, UserGroupType.SPORT,
    UserGroupType.STUDENT, UserGroupType.WORKER];

    this.displayablesUserGroupType = groups.map<DisplayableUserGroupType>((item) => ({
      key: item,
      translationKey: this.userGroupTypeMappingService.translationKey(item)
    }));
  }
}

interface DisplayableUserGroupType {
  key: UserGroupType,
  translationKey: string;
}
