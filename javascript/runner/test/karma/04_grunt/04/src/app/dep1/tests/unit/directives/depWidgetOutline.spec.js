describe('Testing dep1 depWidgetOutline Directive', function() {

  var scope, compile;

  // excuted before each "it" is run
  beforeEach(function() {

    //load the module
    module('dep1');
    module('app/dep1/directives/depWidget.tpl.html');

    // inject dependencies
    inject(function($rootScope, $compile, $templateCache) {
      scope = $rootScope.$new();
      compile = $compile;
    });

  });


  describe('as attribute', function(){

    var element;

    beforeEach(function() {
      element = compile('<div data-dep-widget-outline title="outline widget">some widget content</div>')(scope);
      scope.$digest();
    });

    it('should have scope title text \'outline widget\'', function() {
      var isolated = element.isolateScope();
      expect(isolated.title).toEqual('outline widget');
    });

    it("should have widget css class", function() {
      /*
      console.log(element);
      console.log(element.html());
      console.log(element.hasClass('widget'));
      */
      expect(element.hasClass('widget')).toBeTruthy();
    });


    it('should have 2 inner div', function() {
      expect(element.find('div').length).toEqual(2);
    });

    it('should have title text \'outline widget\'', function() {
      var el = element.find('div').eq(0);
      /*
      console.log(el.hasClass('title'));
      console.log(el.html());
      */
      expect(el.html()).toEqual('outline widget');
    });

    it('should have content text \'some widget content\'', function() {
      //console.log(element.html());
      var el = element.find('span');
      //console.log(el);

      expect(el.html()).toEqual('some widget content');
    });

  });


  describe('as element', function() {

    var element;

    beforeEach(function() {
      element = compile('<dep-widget-outline title="outline widget">some widget content</dep-widget-outline>')(scope);
      scope.$digest();
    });

    it('should have widget css class', function() {
      /*
      console.log(element);
      console.log(element.html());
      console.log(element.hasClass('widget'));
      */
      expect(element.hasClass('widget')).toBeTruthy();
    });

    it('should have 2 inner div', function() {
      expect(element.find('div').length).toEqual(2);
    });


    it('should have title text \'outline widget\'', function() {
      var el = element.find('div').eq(0);
      /*
      console.log(el.hasClass('title'));
      console.log(el.html());
      */
      expect(el.html()).toEqual('outline widget');
    });

    it('should have content text \'some widget content\'', function() {
      //console.log(element.html());
      var el = element.find('span');
      //console.log(el);

      expect(el.html()).toEqual('some widget content');
    });

  });


  describe('as class', function() {

    it('should not have widget css class', function() {
      var element = compile('<div class="dep-widget-outline" title="outline widget">some widget content</div>')(scope);
      scope.$digest();
      expect(element.hasClass('widget')).toBeFalsy();
    });

  });

});