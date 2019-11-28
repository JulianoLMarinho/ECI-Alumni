// https://www.bpmnquickguide.com/view-bpmn-quick-guide/ => BPMN Naming Conventions Best Practices => Gateways => Do not name converging Gateways

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

          if (incoming.length > 1 && node.name != null) {
            reporter.report(node.id, 'Do not name converging Gateways');
          }
        return;
      }  
    }
  
    return { check };
  };