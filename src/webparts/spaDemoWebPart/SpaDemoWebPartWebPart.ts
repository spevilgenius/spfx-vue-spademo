import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'SpaDemoWebPartWebPartStrings';

import { sp } from "@pnp/sp";

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

// import custom styles
require('./assets/bootstrap/dashboard.scss');

import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(far, fas);

dom.watch();

Vue.component('font-awesome-icon', FontAwesomeIcon);

import router from './router';
import App from './components/App.vue';

export interface ISpaDemoWebPartWebPartProps {
  description: string;
}

export default class SpaDemoWebPartWebPart extends BaseClientSideWebPart<ISpaDemoWebPartWebPartProps> {

  public onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context
    });
    
    console.log("Super onInit called: " + this.context.pageContext.web.absoluteUrl);

    return Promise.resolve();
  }

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let el = new Vue({
      el: `#${id}`,
      router: router,
      render: h => h(App, {
        props: {
          description: this.properties.description
        }
      })
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
