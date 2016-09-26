const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAEj35urdqfNphpjzblpT_NfF3xcCCmL4I&libraries=places&callback=initAutoComplete';
declare var window: any;
declare var google: any;

export class GoogleMapsService {
    loadAPI: Promise<any>
    placeSearch: any;
    autocomplete: any;

    constructor() {
        this.loadAPI = new Promise((resolve) => {
            // Set an 'initAutoComplete' function on the global scope for Google Maps API callback
            window['initAutoComplete'] = (ev) => {
                // Create the autocomplete object, restricting the search to geographical
                // location types.
                this.autocomplete = new google.maps.places.Autocomplete(
                /** @type {!HTMLInputElement} */(document.getElementById('location')),
                {types: ['geocode']});

                // When the user selects an address from the dropdown, populate the address
                // fields in the form.

                // this.autocomplete.addListener('place_changed', this.fillInAddress);
            }

            this.loadScript();

            return
        });
    }

    fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = this.autocomplete.getPlace();

        // for (var component in componentForm) {
        //     document.getElementById(component).value = '';
        //     document.getElementById(component).disabled = false;
        // }

        // // Get each component of the address from the place details
        // // and fill the corresponding field on the form.
        // for (var i = 0; i < place.address_components.length; i++) {
        //     var addressType = place.address_components[i].types[0];
        //     if (componentForm[addressType]) {
        //     var val = place.address_components[i][componentForm[addressType]];
        //     document.getElementById(addressType).value = val;
        //     }
        // }
    }

    geolocate() {
        return this.loadAPI.then(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                this.autocomplete.setBounds(circle.getBounds());
                });
            }
        });
    }
    
    loadScript() {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

}
