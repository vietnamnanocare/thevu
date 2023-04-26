TrelloPowerUp.initialize({
  'list-after-move': function(t, opts) {
    return t.card('id', 'idList').get('idList')
      .then(function(listId) {
        // Update the custom buttons on the card based on the new list
        if (listId === 'list-id-1') {
          // Show button 1 and hide button 2
          t.showCardButton('button-1');
          t.hideCardButton('button-2');
        } else if (listId === 'list-id-2') {
          // Show button 2 and hide button 1
          t.showCardButton('button-2');
          t.hideCardButton('button-1');
        } else {
          // Hide both buttons
          t.hideCardButton('button-1');
          t.hideCardButton('button-2');
        }
      });
  }
});
