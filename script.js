const board = Chessboard('board', {
    position: 'start',
    draggable: true,
    dropOffBoard: 'snapback',
    onDrop: function(source, target) {
        console.log(`Move: ${source} to ${target}`);
    }
});
