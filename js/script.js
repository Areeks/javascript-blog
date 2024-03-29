const generateTitleLinks = function()
{
    const listArticles = document.querySelectorAll('.post');
    const getArticleSel = document.querySelector('.list.titles');
    for(let listArticle of listArticles)
    {
        //console.log(listArticle.getAttribute('id'));
        const articleTitle = listArticle.querySelector('.post-title').innerHTML;
        const articleId = listArticle.getAttribute('id');
        const linkHTML = '<li><a href="#' + articleId +'"><span>'+ articleTitle +'</span></a></li>';
        
        //console.log(getArticleSel);
        getArticleSel.innerHTML =  getArticleSel.innerHTML + linkHTML;
    }
}

const clearLinks = function()
{
    const allLinks = document.querySelector('.list.titles');
    allLinks.innerHTML='';
}

const titleClickHandler = function(event){
    event.preventDefault();
    console.log('Link was clicked!');
  
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    this.classList.add('active');
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */
    const hrefElement = this.getAttribute("href");
    /* find the correct article using the selector (value of 'href' attribute) */
    const articleSelector = document.querySelector(hrefElement);
    /* add class 'active' to the correct article */
    articleSelector.classList.add('active');
  }
  
  

  clearLinks();
  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }