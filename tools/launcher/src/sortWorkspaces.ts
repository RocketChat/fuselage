import toposort from 'toposort';

import { Workspace } from './workspace';

export function topologicallySort(workspaces: Workspace[]): Workspace[] {
  const byName: Record<string, Workspace> = {};
  const byLocation: Record<string, Workspace> = {};
  const graph: Array<[string, string]> = [];

  for (const workspace of workspaces) {
    if (!workspace.name) {
      continue;
    }
    byName[workspace.name] = workspace;
    byLocation[workspace.location] = workspace;

    workspace.dependencies = workspace.dependencies.map((dependency) => {
      byLocation[dependency] =
        byLocation[dependency] ||
        workspaces.find(({ location }) => location === dependency);

      return byLocation[dependency]?.name || dependency;
    });

    for (const dependency of workspace.dependencies) {
      graph.push([dependency, workspace.name]);
    }
  }

  const sorted: string[] = toposort(graph);
  const orphans = workspaces.filter(
    (workspace) => !sorted.includes(workspace.name)
  );
  return orphans.concat(sorted.map((name) => byName[name]));
}
