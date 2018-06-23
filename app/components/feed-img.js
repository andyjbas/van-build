import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';

export default Component.extend(InViewportMixin, {
  tagName: 'img',
  attributeBindings: ['src', 'alt'],
  classNames: ['figure-img', 'img-fluid', 'rounded'],
  src: 'assets/images/loading.png',

  didEnterViewport() {
    this.set('src', this.get('url'));
  }
});
