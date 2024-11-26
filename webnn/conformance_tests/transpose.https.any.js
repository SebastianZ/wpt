// META: title=test WebNN API transpose operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-transpose
// Permute the dimensions of the input tensor according to the permutation
// argument.
//
// dictionary MLTransposeOptions {
//   sequence<[EnforceRange] unsigned long> permutation;
// };
//
// MLOperand transpose(
//     MLOperand input, optional MLTransposeOptions options = {});


const getTransposePrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 0, float16: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const transposeTests = [
  {
    'name': 'transpose float32 0D constant tensor default options',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [-45.67443084716797],
          'descriptor': {shape: [], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [{'input': 'transposeInput'}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [-45.67443084716797],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 1D constant tensor default options',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [{'input': 'transposeInput'}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 1D tensor default options',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [{'input': 'transposeInput'}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 2D tensor default options',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [{'input': 'transposeInput'}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797, 1.8434585332870483, 46.38539123535156,
            99.46284484863281,  53.45924758911133,  92.8102798461914,
            -84.89764404296875, -87.58920288085938, -60.118492126464844,
            56.100074768066406, 56.70438766479492,  -65.3779067993164,
            38.081748962402344, 77.05838012695312,  -25.695144653320312,
            -66.00990295410156, 78.64247131347656,  57.46807861328125,
            5.62217378616333,   38.466827392578125, -69.25324249267578,
            -84.74308776855469, -25.66281509399414, 2.1999382972717285
          ],
          'descriptor': {shape: [6, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 3D tensor default options',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [{'input': 'transposeInput'}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  46.38539123535156,   78.64247131347656,
            5.62217378616333,    56.100074768066406,  -65.3779067993164,
            53.45924758911133,   -84.89764404296875,  -69.25324249267578,
            -25.66281509399414,  77.05838012695312,   -66.00990295410156,
            -60.118492126464844, 56.70438766479492,   1.8434585332870483,
            99.46284484863281,   57.46807861328125,   38.466827392578125,
            38.081748962402344,  -25.695144653320312, 92.8102798461914,
            -87.58920288085938,  -84.74308776855469,  2.1999382972717285
          ],
          'descriptor': {shape: [4, 3, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 4D tensor default options',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [1, 2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [{'input': 'transposeInput'}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  46.38539123535156,   78.64247131347656,
            5.62217378616333,    56.100074768066406,  -65.3779067993164,
            53.45924758911133,   -84.89764404296875,  -69.25324249267578,
            -25.66281509399414,  77.05838012695312,   -66.00990295410156,
            -60.118492126464844, 56.70438766479492,   1.8434585332870483,
            99.46284484863281,   57.46807861328125,   38.466827392578125,
            38.081748962402344,  -25.695144653320312, 92.8102798461914,
            -87.58920288085938,  -84.74308776855469,  2.1999382972717285
          ],
          'descriptor': {shape: [4, 3, 2, 1], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 5D tensor default options',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [1, 2, 1, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [{'input': 'transposeInput'}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  46.38539123535156,   78.64247131347656,
            5.62217378616333,    56.100074768066406,  -65.3779067993164,
            53.45924758911133,   -84.89764404296875,  -69.25324249267578,
            -25.66281509399414,  77.05838012695312,   -66.00990295410156,
            -60.118492126464844, 56.70438766479492,   1.8434585332870483,
            99.46284484863281,   57.46807861328125,   38.466827392578125,
            38.081748962402344,  -25.695144653320312, 92.8102798461914,
            -87.58920288085938,  -84.74308776855469,  2.1999382972717285
          ],
          'descriptor': {shape: [4, 3, 1, 2, 1], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 1D tensor options.permutation',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments':
            [{'input': 'transposeInput'}, {'options': {'permutation': [0]}}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 2D tensor options.permutation',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments':
            [{'input': 'transposeInput'}, {'options': {'permutation': [1, 0]}}],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797, 1.8434585332870483, 46.38539123535156,
            99.46284484863281,  53.45924758911133,  92.8102798461914,
            -84.89764404296875, -87.58920288085938, -60.118492126464844,
            56.100074768066406, 56.70438766479492,  -65.3779067993164,
            38.081748962402344, 77.05838012695312,  -25.695144653320312,
            -66.00990295410156, 78.64247131347656,  57.46807861328125,
            5.62217378616333,   38.466827392578125, -69.25324249267578,
            -84.74308776855469, -25.66281509399414, 2.1999382972717285
          ],
          'descriptor': {shape: [6, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 3D tensor options.permutation',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [
          {'input': 'transposeInput'}, {'options': {'permutation': [2, 0, 1]}}
        ],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  78.64247131347656,  56.100074768066406,
            46.38539123535156,   5.62217378616333,   -65.3779067993164,
            53.45924758911133,   -69.25324249267578, 77.05838012695312,
            -84.89764404296875,  -25.66281509399414, -66.00990295410156,
            -60.118492126464844, 1.8434585332870483, 57.46807861328125,
            56.70438766479492,   99.46284484863281,  38.466827392578125,
            38.081748962402344,  92.8102798461914,   -84.74308776855469,
            -25.695144653320312, -87.58920288085938, 2.1999382972717285
          ],
          'descriptor': {shape: [4, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 4D tensor options.permutation',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [1, 2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [
          {'input': 'transposeInput'},
          {'options': {'permutation': [2, 3, 0, 1]}}
        ],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797, 46.38539123535156,   53.45924758911133,
            -84.89764404296875, -60.118492126464844, 56.70438766479492,
            38.081748962402344, -25.695144653320312, 78.64247131347656,
            5.62217378616333,   -69.25324249267578,  -25.66281509399414,
            1.8434585332870483, 99.46284484863281,   92.8102798461914,
            -87.58920288085938, 56.100074768066406,  -65.3779067993164,
            77.05838012695312,  -66.00990295410156,  57.46807861328125,
            38.466827392578125, -84.74308776855469,  2.1999382972717285
          ],
          'descriptor': {shape: [3, 4, 1, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'transpose float32 5D tensor options.permutation',
    'graph': {
      'inputs': {
        'transposeInput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [1, 2, 1, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'transpose',
        'arguments': [
          {'input': 'transposeInput'},
          {'options': {'permutation': [1, 3, 0, 4, 2]}}
        ],
        'outputs': 'transposeOutput'
      }],
      'expectedOutputs': {
        'transposeOutput': {
          'data': [
            -45.67443084716797,  53.45924758911133,  -60.118492126464844,
            38.081748962402344,  78.64247131347656,  -69.25324249267578,
            1.8434585332870483,  92.8102798461914,   56.100074768066406,
            77.05838012695312,   57.46807861328125,  -84.74308776855469,
            46.38539123535156,   -84.89764404296875, 56.70438766479492,
            -25.695144653320312, 5.62217378616333,   -25.66281509399414,
            99.46284484863281,   -87.58920288085938, -65.3779067993164,
            -66.00990295410156,  38.466827392578125, 2.1999382972717285
          ],
          'descriptor': {shape: [2, 3, 1, 4, 1], dataType: 'float32'}
        }
      }
    }
  }
];

if (navigator.ml) {
  transposeTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getTransposePrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
