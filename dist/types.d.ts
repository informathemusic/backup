/// <reference types="node" />
export declare type PackageManagers = 'apt' | 'rpm' | 'dnf' | 'yay' | 'pacman' | 'all' | 'winget';
export interface PackageManagerInstall {
    type: 'packagemanager';
    value: Partial<Record<PackageManagers, string>>;
}
export interface SnapInstall {
    type: 'snap';
    value: {
        name: string;
        classic?: boolean;
    };
}
export interface ShellInstallRemoteScript {
    url: string;
    nonRoot?: boolean;
}
export interface ShellInstallCommands {
    gitURI?: string;
    tar?: string;
    commands: string;
    nonRoot?: boolean;
}
export interface ShellInstall {
    type: 'shell';
    value: ShellInstallRemoteScript | ShellInstallCommands;
}
export declare type Install = PackageManagerInstall | SnapInstall | ShellInstall;
export declare type Platform = NodeJS.Platform | 'unix' | 'unix-like' | 'linux' | 'gnu/linux' | 'mac' | 'macos' | 'bsd' | 'beos' | 'windows' | 'winnt' | 'windowsnt' | 'all';
export declare type PlatformDependant<T> = Partial<Record<Platform, T>>;
export declare type MaybeArray<T> = T | T[];
export interface Move {
    glob: MaybeArray<string | PlatformDependant<string>>;
    deleteNew?: boolean | 'prompt';
    overwrite?: boolean | 'prompt';
}
export interface App {
    id: string;
    name: string;
    dependencies?: string | string[];
    install: Install | Install[];
    postinstall?: string;
    move?: Move[];
}
export interface Data {
    apps: App[];
    storage: Move[];
}
export interface Settled {
    programs: string[];
    fileLocation: string;
    location?: string;
    filename?: string;
    compression: 'zip' | 'tgz' | 'none';
}
