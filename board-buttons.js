TrelloPowerUp.initialize({
  'list-after-move': function(t, opts) {
    return t.card('id', 'idList').get('idList')
      .then(function(listId) {
        // Update the custom buttons on the card based on the new list
        if (listId === '643a899f144aad0bd5ebb949') {
          // Show button 1 and hide button 2
          t.showCardButton('button-1');
          t.hideCardButton('button-2');
          t.hideCardButton('button-3');
        } else if (listId === '643a8915c79c5a4d8d977f6f') {
          // Show button 2 and hide button 1
          t.showCardButton('button-2');
          t.hideCardButton('button-1');
          t.hideCardButton('button-3');
        } else if (listId === '643a8915c79c5a4d8d977f71') {
         // Show button 2 and hide button 1
          t.showCardButton('button-3');
          t.hideCardButton('button-1');
          t.hideCardButton('button-2');
        } else {
          // Hide both buttons
          t.hideCardButton('button-1');
          t.hideCardButton('button-2');
          t.hideCardButton('button-3');
        }
      });
  }
});
