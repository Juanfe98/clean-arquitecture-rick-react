export declare type AssignPropsWithoutRef<Inner extends string | React.ComponentType<any>, P> = Omit<React.ComponentPropsWithoutRef<Inner extends React.ElementType ? Inner : never>, keyof P> & P;

export declare type AssignPropsWithRef<Inner extends string | React.ComponentType<any>, P> = Omit<React.ComponentPropsWithRef<Inner extends React.ElementType ? Inner : never>, keyof P> & P;

export interface DynamicRefForwardingComponent<TInitial extends string | React.ComponentType<any>, P = {
  children?: React.ReactNode;
}> {
  <As extends string | React.ComponentType<any> = TInitial>(props: AssignPropsWithRef<As, {
      as?: As;
  } & P>, context?: any): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}