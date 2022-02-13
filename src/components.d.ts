/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
import { CanvasEntity } from "./models/entity";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface RikiCanvas {
    }
    interface RikiEntity {
        "e": CanvasEntity;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLRikiCanvasElement extends Components.RikiCanvas, HTMLStencilElement {
    }
    var HTMLRikiCanvasElement: {
        prototype: HTMLRikiCanvasElement;
        new (): HTMLRikiCanvasElement;
    };
    interface HTMLRikiEntityElement extends Components.RikiEntity, HTMLStencilElement {
    }
    var HTMLRikiEntityElement: {
        prototype: HTMLRikiEntityElement;
        new (): HTMLRikiEntityElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "riki-canvas": HTMLRikiCanvasElement;
        "riki-entity": HTMLRikiEntityElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface RikiCanvas {
    }
    interface RikiEntity {
        "e"?: CanvasEntity;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "riki-canvas": RikiCanvas;
        "riki-entity": RikiEntity;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "riki-canvas": LocalJSX.RikiCanvas & JSXBase.HTMLAttributes<HTMLRikiCanvasElement>;
            "riki-entity": LocalJSX.RikiEntity & JSXBase.HTMLAttributes<HTMLRikiEntityElement>;
        }
    }
}
