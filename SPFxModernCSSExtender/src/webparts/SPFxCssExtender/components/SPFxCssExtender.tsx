import * as React from 'react';
import styles from './SPFxCssExtender.module.scss';
import { ISPFxCssExtenderProps } from './ISPFxCssExtenderProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {SPComponentLoader } from '@microsoft/sp-loader'

export default class SPFxCssExtender extends React.Component<ISPFxCssExtenderProps, {}> {

  public render(): React.ReactElement<ISPFxCssExtenderProps> {
    if(this.props.pathtocssfile !== "")
    {
      SPComponentLoader.loadCss(this.props.pathtocssfile);
    }
    return (
      <div>
      {this.props.pathtocssfile === "" &&
      <div className={ styles.SPFxCssExtender }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.subTitle }>We couldn't find a CSS file. <br/> Please open the property pane and provide a path to CSS file of Site Relative Path such as '/sites/..'. <br /> Also please make sure Users have access to the location.</span>
            </div>
          </div>
        </div>
      </div>
    
   }
   </div>
   );
  }
}
