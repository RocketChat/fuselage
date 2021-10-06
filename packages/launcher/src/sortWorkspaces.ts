import toposort from 'toposort';
import { PackageInfo } from 'yarn-workspaces-list';

export function topologicallySort(workspaces: PackageInfo[]): PackageInfo[] {
  const byName: Record<string, PackageInfo> = {};
  const byLocation: Record<string, PackageInfo> = {};
  const graph: Array<[string, string]> = [];

  for (const workspace of workspaces) {
    if (!workspace.name) {
      continue;
    }
    byName[workspace.name] = workspace;
    byLocation[workspace.location] = workspace;

    workspace.workspaceDependencies = workspace.workspaceDependencies.map(
      (dependency) => {
        byLocation[dependency] =
          byLocation[dependency] ||
          workspaces.find(({ location }) => location === dependency);

        return byLocation[dependency]?.name || dependency;
      }
    );

    for (const dependency of workspace.workspaceDependencies) {
      graph.push([dependency, workspace.name]);
    }
  }

  const sorted: string[] = toposort(graph);
  const orphans = workspaces.filter(
    (workspace) => !sorted.includes(workspace.name)
  );
  return orphans.concat(sorted.map((name) => byName[name]));
}
