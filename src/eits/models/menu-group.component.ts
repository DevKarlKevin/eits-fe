export class MenuGroup {
  id: string = '';
  title: string = '';
  content: string = '';
  parent_level?: boolean;
  child_objects: MenuGroup[] = [];
}
