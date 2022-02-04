{
  'use strict';

  // document.getElementById('test-button').addEventListener('click', function(){
  //     const links = document.querySelectorAll('.titles a');
  //     console.log('links:', links);
  //   });

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log(this);
    console.log('Link was clicked!');
    console.log(event)

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active')
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active')
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('Clicked element is :', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('Found article is :', targetArticle);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log('Added class active to :', clickedElement);
  }

   const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks() {
    console.log('Start Page');

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = ''
    console.log("Remove contents title list: ", document.querySelector(optTitleListSelector));

    /* for each article: */

    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    for (let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');
      console.log('Found article is :', articleId);

      /* find the title element and  get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('Found article title is :', articleId);

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('created HTML of the link :', linkHTML);

      /* insert link into html variable */
      html = html + linkHTML;
      console.log('HTML after loop:', html);

       /* insert link into titleList !!!!!! HELP jest na wstepnej instrukcji ale  nie ma w kolejnym  pokazie sugerowanego rozwiazania DLACZEGO?!*/
       titleList.innerHTML = titleList.innerHTML + linkHTML;
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler)
    }
  }
  
  generateTitleLinks();
  console.log('Title List after loop:', generateTitleLinks);
}

      
 