window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode, childButton) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode)
  tdNode.appendChild(childButton)
  return tdNode;
}

function createTxtNode(txt) {
  let contentNode = document.createElement('p');
  contentNode.id = 'p-' + txt;
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButton(id) {
  let tdButton = document.createElement("button");
  tdButton.innerText = "Edit Text"
  tdButton.addEventListener('click', buttonEvent(id))
  return tdButton;
}

function buttonEvent(id) {
  return () => document.getElementById(`p-${id}`).innerHTML = '<p>123</p>'
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"), createButton(i));
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}
