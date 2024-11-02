import {Module} from './module.component';

export class ModuleGroup {
  groupId?: any;
  groupTitle: string = '';
  groupCode?: string;
  modules: Module[] = [];
  moduleSubgroups: ModuleGroup[] = [];
}
