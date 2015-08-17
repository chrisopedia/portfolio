/**
 * modal.class.js
 * Requires: jQuery, class.js
 * 
 * Thinnest modal around.
 *
 * Usage:
 * 		var modal = new ModalClass( [options] );
 * 
 * Options:
 *		selector (string): If defined, attaches click events to matching elements
 *
 * Data Values:
 * 		data-modal-class: Css class that will eb applied to modal
 *		data-modal-content: Content to be shown as a caption for images
 */

var ModalClass = Class.extend({
	defaults: {
		selector: '',
		imageReg: /\.(jpe?g|png|gif|bmp)/gi
	},
	init: function(options) {
		var self = this;
		this.options = $.extend({}, this.defaults, options);
		
		if(this.options.selector.length>0) {
			$(this.options.selector).each(function(){
				$(this).click(function(e){
					e.preventDefault();
					$this = $(this);
					data = {
						modalClass: $this.data("modal-class") || "",
						modalUrl: $this.attr('href') || "",
						modalContent: $this.data('modal-content') || ""
					}
					self.showModal(data);
				});
			});
		}
	},
	showModal: function(data) {
		var self = this;
		this.removeModal();
		var body = $('body');
		var modalMaster = $('<div/>').addClass('Modal');
		var modalOverlay = $('<div/>').addClass('ModalOverlay').appendTo(modalMaster);
		var modalContainer = $('<div/>')
			.addClass('ModalContainer')
			.addClass(data.modalClass)
			.appendTo(modalMaster);
		
		body.addClass('ModalOpen');
				
		if(data.modalUrl.length>0) {
			if(data.modalUrl.match(this.options.imageReg)) {
				var image = new Image();
				image.src = data.modalUrl;
				var modalImage = $('<div/>').addClass("ModalImage").appendTo(modalContainer);
				$(image).appendTo(modalImage);
			} else {
				var iframe = $('<iframe/>').attr({
					height: '100%',
					width: '100%',
					frameborder: '0',
					src: data.modalUrl
				}).css('border','0');
				
				var modalFrame = $('<div/>').addClass("ModalFrame").appendTo(modalContainer);
				$(iframe).appendTo(modalFrame);
			}
		}
		if(data.modalContent.length>0) {
			var contentContainer = $('<div/>')
				.addClass("ModalContent")
				.html(data.modalContent)
				.appendTo(modalContainer);
		}
		
		modalMaster.prependTo(body);
		modalOverlay.click(function(){
			self.removeModal();
		});
	},
	removeModal: function() {
		$('.Modal').remove();
		$('body').removeClass('ModalOpen');
	}
});