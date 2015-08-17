/**
 * Simple javascript modal.
 *
 * Example:
 *     ehow.Modal = new ModalClass({selector: "a[data-type=modal]"});
 *
 * Data Values:
 *  data-modal-class: Css class that will be applied to modal
 *  data-modal-content: Content to be shown as a caption for images 
 *
 * @requires jquery
 * @requires class
 * @param [Object] options Option object.
 * @option [String] selector Selector to attach modal clicks to.
 * @option [RegEx] imageReg Regular Expression to match images.
 * @option [Function] clickCallback Callback fired when modal is opened.
 */

ModalClass = Class.extend({
  defaults: {
    selector: '',
    imageReg: /\.(jpe?g|png|gif|bmp)$/gi,
    clickCallback: function () {}
  },

  /**
   * Initializes class. Attaches events to links.
   *
   * @param [Object] options Option object.
   */

  init: function (options) {
    var self = this,
      trigger,
      data;

    this.options = $.extend({}, this.defaults, options);
    
    if (this.options.selector.length > 0) {
      $(this.options.selector).each(function () {
        var $this;
        
        trigger = $(this).attr('data-modal-trigger');

        if (typeof trigger !== 'undefined') {
          $this = $(this);

          data = {
            modalClass: $this.data("modal-class") || "",
            modalUrl: $this.attr('href') || $this.attr('data-href') || "",
            modalContent: $this.data('modal-content') || "",
            modalShowCloseButton: $this.data('modal-close') || "true",
            modalInline: $(this).data("modal-inline") || "",
            modalScroll: $(this).data("modal-scroll") || "no",
            disableOverlayClose: $(this).data("modal-disable-overlay-close") || false
          };

          $(trigger).click(function () {
            self.showModal(data); 
          });
        } else {
          $(this).click(function (e) {
            e.preventDefault();
          
            $this = $(this);
          
            data = {
              modalClass: $this.data("modal-class") || "",
              modalUrl: $this.attr('href') || $this.attr('data-href') || "",
              modalContent: $this.data('modal-content') || "",
              modalShowCloseButton: $this.data('modal-close') || "true",
              modalInline: $(this).data("modal-inline") || "",
              modalScroll: $(this).data("modal-scroll") || "no",
              disableOverlayClose: $(this).data("modal-disable-overlay-close") || false
            };

            self.showModal(data);
          });
        }
      });
    }
  },

  /**
   * Creates a modal and inserts content.
   *
   * @param {Object} data Data object containing various options.
   */

  showModal: function (data) {
    //makes sure all modals are closed first.
    this.removeModal();

    var self = this,
      image,
      modalImage,
      modalFrame,
      contentContainer,
      modalClose,
      body = $('body'),
      modalMaster = $('<div/>').addClass('Modal'),
      modalOverlay = $('<div/>').addClass('overlay').appendTo(modalMaster),
      modalContainer = $('<div/>')
        .addClass('container')
        .addClass(data.modalClass)
        .appendTo(modalMaster),
      modalContents = $('<div/>')
        .addClass('contents')
        .appendTo(modalContainer),
      scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    body.addClass('ModalOpen');
        
    if (data.modalUrl.length > 0) {
      if (data.modalUrl.match(this.options.imageReg)) {
        image = new Image();
        image.src = data.modalUrl;

        modalContainer.hide();

        //IE awesome complete code
        if (image.complete || image.readyState === 4) {
          modalImage = $('<div/>').addClass("modalImage").prependTo(modalContents);
          modalContainer.css({
            display: 'block',
            width: image.width
          });

          $(image).prependTo(modalImage);
          
          modalContainer.css({
            width: image.width + 22,
            display: 'block',
            left: '50%',
            marginLeft: '-' + image.width / 2 + 'px'
          });
        } else {
          $(image).one('load', function () {
            modalImage = $('<div/>').addClass("modalImage").prependTo(modalContents);
            modalContainer.css({
              display: 'block',
              width: image.width
            });
            $(image).prependTo(modalImage);
            
            modalContainer.css({
              width: image.width + 22,
              display: 'block',
              left: '50%',
              marginLeft: '-' + image.width / 2 + 'px'
            });
          });
        }
      } else {
        this.iframe = $('<iframe/>').attr({
          height: '300',
          width: '100%',
          scrolling: data.modalScroll,
          frameborder: '0',
          src: data.modalUrl
        }).css('border', '0');
        modalContainer.css({
          width: 460 + 22
        });
        
        modalFrame = $('<div/>').addClass("frame").appendTo(modalContents);
        $(this.iframe).appendTo(modalFrame);
      }
    } else {
      if (data.modalInline !== "") {
        // For directly loading page content (can't have data-url)
        $(modalContents).append($(data.modalInline).html());
      }
    }
    if (data.modalContent.length > 0) {
      contentContainer = $('<div/>')
        .addClass("ModalContent Note")
        .html(data.modalContent)
        .appendTo(modalContents);
    }
    
    if (data.modalShowCloseButton === "true") {
      modalClose = $('<button/>')
        .addClass("close")
        .html("&times;")
        .prependTo(modalContainer);
        
      modalClose.one("click", function () {
        self.removeModal(true);
      });
    }
    
    modalOverlay.css('opacity', 0);
    modalContainer.css('opacity', 0);
    modalOverlay.css('opacity', 0.85);
    modalContainer.css('opacity', 1);
    this.modalOverlay = modalOverlay;
    this.modalContainer = modalContainer;

    this.modalContainer.css({
      top: (!scrollY ? 150 : scrollY + 50)
    });
    
    modalMaster.prependTo(body);

    if (!data.disableOverlayClose) {
      modalOverlay.click(function () {
        self.removeModal();
      });
    }
    this.options.clickCallback();
  },

  /**
   * Removes a modal.
   *
   * @param [Boolean] animate If true, fades the modal out.
   */

  removeModal: function (animate) {
    if (animate) {
      this.modalContainer.animate({
          opacity: 0
        }, 250
      );

      this.modalOverlay.animate({
          opacity: 0
        }, 500, function () {
          $('.Modal').remove();
          $('body').removeClass('ModalOpen');
        }
      );
    } else {
      $('.Modal').remove();
      $('body').removeClass('ModalOpen');
    }

    $('body').trigger('modal.close');
  },

  /**
   * Resizes an iframe based modal
   *
   * @param {Integer} width Width of the iframe.
   * @param {Integer} height Height of the iframe.
   * @todo Make this work with non iframe modals.
   */

  resize: function (width, height) {
    this.iframe.animate({
      width: width,
      height: height
    }, 500);

    this.modalContainer.css('width', width + 22);
  }
});
var Modal = new ModalClass({selector: "[data-type=modal]"});
