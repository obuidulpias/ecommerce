<template>
	 <div class="widget widget-color mb-4 border rounded p-4">
            <h5 class="widget-title mb-3">Color</h5>
            <ul class="list-inline">
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter1" name="Radios">
                  <label class="form-check-label" for="color-filter1" data-bg-color="#3cb371"></label>
                </div>
              </li>
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter2" name="Radios" checked>
                  <label class="form-check-label" for="color-filter2" data-bg-color="#4876ff"></label>
                </div>
              </li>
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter3" name="Radios">
                  <label class="form-check-label" for="color-filter3" data-bg-color="#0a1b2b"></label>
                </div>
              </li>
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter4" name="Radios">
                  <label class="form-check-label" for="color-filter4" data-bg-color="#f94f15"></label>
                </div>
              </li>
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter5" name="Radios">
                  <label class="form-check-label" for="color-filter5" data-bg-color="#FF00FF"></label>
                </div>
              </li>
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter6" name="Radios">
                  <label class="form-check-label" for="color-filter6" data-bg-color="#ffc300"></label>
                </div>
              </li>
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter7" name="Radios">
                  <label class="form-check-label" for="color-filter7" data-bg-color="#808080"></label>
                </div>
              </li>
              <li>
                <div class="form-check pl-0">
                  <input type="radio" class="form-check-input" id="color-filter8" name="Radios">
                  <label class="form-check-label" for="color-filter8" data-bg-color="#008080"></label>
                </div>
              </li>
            </ul>
          </div>

</template>


<script>
	export default {
    mounted(){
      $('[data-bg-color]').each(function(index, el) {
        $(el).css('background-color', $(el).data('bg-color'));
        });
        $('[data-text-color]').each(function(index, el) {
        $(el).css('color', $(el).data('text-color'));
        });
        $('[data-bg-img]').each(function() {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
        });
    }
  }
</script>


<style>

</style>
