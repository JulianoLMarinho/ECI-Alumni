// https://run.unl.pt/bitstream/10362/12205/1/Correia_2014.pdf => B.7 => A Boundary Event must have exactly one outgoing Sequence Flow

const {
    is,
    isAny
  } = require('bpmnlint-utils');
  
  
  /**
   * A rule that checks the presence of an end event per scope.
   */
  module.exports = function() {
  
    function hasEndEvent(node) {
      const flowElements = node.flowElements || [];
  
      return (
        flowElements.some(node => is(node, 'bpmn:EndEvent'))
      );
    }
  
    function check(node, reporter) {
      if (is(node, 'bpmn:BoundaryEvent')) {
          const outgoing = node.outgoing || [];

          if (outgoing.length != 1) {
            reporter.report(node.id, 'A Boundary Event must have exactly one outgoing Sequence Flow');
          }
        return;
      }  
    }
  
    return { check };
  };