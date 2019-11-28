// https://www.bpmnquickguide.com/view-bpmn-quick-guide/ => BPMN Naming Conventions Best Practices => Do not use the element type in its name

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
        const name = node.name
        if (name != null && 'bpmn:'+name === node.$type){
            reporter.report(node.id, 'Do not use the element type in its name');
        }
        return;
    }
  
    return { check };
  };