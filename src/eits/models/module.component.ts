import {ModuleGroup} from './module-group.component';

export class Module {
  moduleId?: string;
  groupId?: string;
  moduleTitle: string = '';
  moduleCode?: string;
  moduleSubgroups?: ModuleGroup[];
}
