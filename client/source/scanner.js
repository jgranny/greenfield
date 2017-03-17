import Quagga from 'quagga';

export default function Scanner () {
  var App = {
    init: function() {
      var self = this;

      Quagga.init(this.state, function(err) {
        if (err) {
          return self.handleError(err);
        }

        //App.attachListeners();
        Quagga.start();
      });
    },
    state: {
      numOfWorkers: 4,
      locate: true,
      inputStream: {
        type: 'LiveStream',
        constraints: {
          width: 640, //Not sure on this
          height: 480, //Same here
          facingMode: 'environment'
        },
        area: { //defines rectagle of the detection area
          top: '0%', //top offset
          right: '0%',
          left: '0%',
          bottom: '0%'
        }
      },
      frequency: 10,
      decoder: {
        readers: [
          'ean_reader',    //These barcodes should be inorder of most expected to encounter
          'ean_8_reader',    //EAN seem to be used for groceries, so that's why they're included
          'upc_reader'
        ],
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true
        }
      },
      locator: {
        halfSample: true,
        patchSize: 'medium',
        //Debug should be deleted after setup
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLables: true
        }
      },
      debug: true
    }
  }
}
