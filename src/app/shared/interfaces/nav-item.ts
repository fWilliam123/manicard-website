export interface NavItem {
  displayName: string;
  rappidLink?: boolean;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
