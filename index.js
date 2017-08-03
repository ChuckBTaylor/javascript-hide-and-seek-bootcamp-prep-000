function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.querySelector('#nested .target')
}

function increaseRankBy(n)
{
  const rankedLists = document.querySelectorAll('.ranked-list')
  let firstList = rankedLists[0]
  let otherList = rankedLists[1]

  let kids = firstList.children
  let cousins = otherList.children


  for(let i=0;i<kids.length;i++)
  {
      let num = parseInt(kids[i].innerHTML)
      num += n
      kids[i].innerHTML = num
      //document.write(kids[i].innerHTML)
  }
  for(let i=0;i<cousins.length;i++)
  {
    let num = parseInt(cousins[i].innerHTML)
    num += n
    cousins[i].innerHTML = num
  }
}

function deepestChild()
{
  return document.querySelector('div#grand-node div div div div')
}
