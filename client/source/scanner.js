import Quagga from 'quagga';

// let Scanner = {
//   init: function() {
//     console.log('scanner app')
//   }
// }

export default function Scanner () {
  var App = {
    init: function() {
      console.log('quagga console 1')

      Quagga.init(Scanner.state, function(err) {
        console.log('quagga console 2')
        if (err) {
          console.log(err)
          return
        }
        console.log('quagga initialized')
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

  App.init();

  Quagga.onProcessed(function() {});

  Quagga.onDetected(function(){});
}

// export{Scanner}
