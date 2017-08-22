import '../polymer/polymer.js';
import '../iron-flex-layout/iron-flex-layout.js';
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
      }
    </style>
    <slot></slot>
`,

  is: 'paper-item',

  behaviors: [
    PaperItemBehavior
  ]
});
