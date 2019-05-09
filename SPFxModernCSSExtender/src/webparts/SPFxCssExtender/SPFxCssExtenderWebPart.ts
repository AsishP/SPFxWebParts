import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SPFxCssExtenderWebPartStrings';
import SPFxCssExtender from './components/SPFxCssExtender';
import { ISPFxCssExtenderProps } from './components/ISPFxCssExtenderProps';

export interface ISPFxCssExtenderWebPartProps {
  pathtocssfile: string;
}

export default class SPFxCssExtenderWebPart extends BaseClientSideWebPart<ISPFxCssExtenderWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISPFxCssExtenderProps > = React.createElement(
      SPFxCssExtender,
      {
        pathtocssfile: this.properties.pathtocssfile
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
                PropertyPaneTextField('pathtocssfile', {
                  label: strings.CSSFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
