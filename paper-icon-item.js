import '../polymer/polymer.js';
import '../iron-flex-layout/iron-flex-layout.js';
import '../paper-styles/typography.js';
import { PaperItemBehavior } from './paper-item-behavior.js';
import './paper-item-shared-styles.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,

  is: 'paper-icon-item',

  behaviors: [
    PaperItemBehavior
  ]
});
