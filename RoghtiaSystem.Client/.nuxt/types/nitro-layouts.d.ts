export type LayoutKey = "default" | "print"
declare module '@nuxt/schema' {
  interface AppRouteRulesExtensions {
    appLayout?: LayoutKey | false
  }
  interface RouteRuleConfigExtensions {
    appLayout?: LayoutKey | false
  }
}
declare module 'nuxt/schema' {
  interface AppRouteRulesExtensions {
    appLayout?: LayoutKey | false
  }
  interface RouteRuleConfigExtensions {
    appLayout?: LayoutKey | false
  }
}