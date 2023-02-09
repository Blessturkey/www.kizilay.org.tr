/* datepicker düzgün çalýþmýyor düzeltmek için */
$(window).on('load', function () {

		_datepickerduzelt();
	});

function _datepickerduzelt() {
	/** Date Picker
			<input type="text" class="form-control datepicker" data-format="yyyy-mm-dd" data-lang="en" data-RTL="false">
		 ******************* **/
	    
	var _container_1 = jQuery('.datepicker');

	if (_container_1.length > 0) {
	
		$('.datepicker').datepicker('remove');
			if (jQuery().datepicker) {

				_container_1.each(function () {
					var _t = jQuery(this),
						_lang = _t.attr('data-lang') || 'en';

				

					jQuery(this).datepicker({
						format: _t.attr('data-format') || 'yyyy-mm-dd',
						language: _lang,
						rtl: _t.attr('data-RTL') === "true" ? true : false,
						changeMonth: _t.attr('data-changeMonth') === "false" ? false : true,
						todayBtn: _t.attr('data-todayBtn') === "false" ? false : "linked",
						calendarWeeks: _t.attr('data-calendarWeeks') === "false" ? false : true,
						autoclose: _t.attr('data-autoclose') === "false" ? false : true,
						todayHighlight: _t.attr('data-todayHighlight') === "false" ? false : true,
						startDate: new Date(_t.attr('data-from')),
						endDate: new Date(_t.attr('data-to')),
						onRender: function (date) {
							// return date.valueOf() < nowDate.valueOf() ? 'disabled' : '';
						}
					}).on('changeDate', function (ev) {

						// AJAX POST - OPTIONAL

					}).data('datepicker');
				});

			}
	} 

}