// LongView, Inc. - Steve Nera
(function(Backbone, _) {
  var History = Backbone.History.extend({
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.trigger('url:change', {current: this.fragment, next: current});
      this.loadUrl();
    }
  });
  Backbone.history = new History();
})(Backbone, _);
