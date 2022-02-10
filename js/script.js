{
  'use strict';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log(this);
    console.log('Link was clicked!');
    console.log(event);

    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    const articleSelector = clickedElement.getAttribute('href');
    console.log('Clicked element is :', articleSelector);

    const targetArticle = document.querySelector(articleSelector);
    console.log('Found article is :', targetArticle);

    targetArticle.classList.add('active');
    console.log('Added class active to :', clickedElement);
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  const  generateTitleLinks = function () {
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    console.log('Remove contents title list: ', document.querySelector(optTitleListSelector));

    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    for (let article of articles) {
      const articleId = article.getAttribute('id');
      console.log('Found article is :', articleId);

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('Found article title is :', articleId);

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('created HTML of the link :', linkHTML);

      html = html + linkHTML;
      console.log('HTML after loop:', html);
    }
    
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };
  generateTitleLinks();
  console.log('Title List after loop:', generateTitleLinks);
}