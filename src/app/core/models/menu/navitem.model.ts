export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  matToolTip?: string;
  children?: NavItem[];
}
