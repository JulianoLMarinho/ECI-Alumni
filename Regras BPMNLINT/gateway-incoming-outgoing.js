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
      if (node.$type.includes('Gateway')) {
          const incoming = node.incoming || [];
          const outgoing = node.outgoing || [];

          if ((incoming.length === 1 && outgoing.length <2) || (incoming.length < 2 && outgoing.length === 1)) {
            reporter.report(node.id, 'A Gateway must have either multiple incoming Sequence Flow or multiple outgoing Sequence Flow (it must merge or split the flow)');
          }
        return;
      }  
    }
  
    return { check };
  };