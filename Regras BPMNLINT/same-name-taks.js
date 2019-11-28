// https://www.bpmnquickguide.com/view-bpmn-quick-guide/ => BPMN Naming Conventions Best Practices => Activity => Do not name multiple Activities with the same name (except for Call Activities)

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
        debugger;
        const parentElements = node.$parent != null? node.$parent.flowElements || [] : []
      if (node.$type.includes('Task')) {
            for (let i = 0; i < parentElements.length; i++){
                if (parentElements[i].$type.includes('Task') && node.id != parentElements[i].id){
                    if(parentElements[i].name === node.name){
                        reporter.report(node.id, 'Do not name multiple Activities with the same name');
                        break;
                    }
                }
            }
        return;
      }  
    }
  
    return { check };
  };