// https://run.unl.pt/bitstream/10362/12205/1/Correia_2014.pdf => B.2 => Outgoing Sequence Flow not allowed in an End Event

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
      if (is(node, 'bpmn:EndEvent')) {
          const outgoing = node.outgoing || [];

          if (outgoing.length > 0) {
            reporter.report(node.id, 'EndEvent can\'t have any outgoing flow');
          }
        return;
      }  
    }
  
    return { check };
  };