

function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, linkedList, collection){
  let node = collection[linkedList];
  for(let i = 0; i < index; i++){
    node = collection[node.next]
  }
  return node
}

function addressAt(index, linkedList, collection){
  let selection = collection[linkedList];
  let address;
  if(index === 0){
    return linkedList;
  } else {
    for(let i=0;i<index;i++){
      address = selection.next
      selection = collection[selection.next]

    }
    return address;
  }
}

function indexAt(node, collection, linkedList){
  let selection = headNode(linkedList, collection);
  let index = 0;
  while(selection != node){
    selection = next(selection, collection)
    index++
  }
  return index;
}
function insertNodeAt(index, address, linkedList, collection){
  let node = nodeAt(index-1, linkedList, collection);
  let nextNode = node.next
  node.next = address;
  collection[address].next = nextNode
}

function deleteNodeAt(index, linkedList, collection){
  let node = nodeAt(index - 1, linkedList, collection)
  let nextNode = nodeAt(index, linkedList, collection).next
  node.next = nextNode
}
