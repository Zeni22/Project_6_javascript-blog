{
  'use strict';

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log(this);
    console.log('Link was clicked!');
    console.log(event);

    const activeLinks = document.querySelectorAll('.titles a.active');      /*[DONE]remove class 'active' from all article links  */
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    clickedElement.classList.add('active');                                 /*[DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);

    const activeArticles = document.querySelectorAll('.post.active');       /* [DONE] remove class 'active' from all articles */
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    const articleSelector = clickedElement.getAttribute('href');            /* [DONE] get 'href' attribute from the clicked link */
    console.log('Clicked element is :', articleSelector);

    const targetArticle = document.querySelector(articleSelector);          /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    console.log('Found article is :', targetArticle);

    targetArticle.classList.add('active');                                 /* [DONE] add class 'active' to the correct article */
    console.log('Added class active to :', clickedElement);
  };


  const  generateTitleLinks = function () {

    const titleList = document.querySelector(optTitleListSelector);       /* [DONE] make a new constant titleList */
    titleList.innerHTML = '';                                             /* [DONE] remove contents of titleList */

    const articles = document.querySelectorAll(optArticleSelector);       /* [DONE] find all the articles and save them to variable: articles */
    let html = '';

    for (let article of articles) {                                       /* [DONE] for each article: */

      const articleId = article.getAttribute('id');                       /* [DONE] get the article id */
      console.log('Found article is :', articleId);

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;   /* [DONE] find the title element and  get the title from the title element */
      console.log('Found article title is :', articleId);

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';   /* [DONE] create HTML of the link */
      console.log('created HTML of the link :', linkHTML);

      html = html + linkHTML;                                             /* [DONE] insert link into html variable */
      console.log('HTML after loop:', html);
    }

    titleList.innerHTML = html;                                           /* [DONE] insert link into titleList */

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };
  generateTitleLinks();


  const generateTags = function() {
    const articles = document.querySelectorAll(optArticleSelector);       /* [DONE]  find all articles */

    for (let article of articles) {                                       /* [DONE]  START LOOP: for every article: */

      const tagWrapper = article.querySelector(optArticleTagsSelector);   /* [DONE]  find tags wrapper */
      console.log('tag Wrapper is:', tagWrapper);

      let html = '';                                                      /* [DONE]  make html variable with empty string */

      const articleTags = article.getAttribute('data-tags');              /* [DONE]  get tags from data-tags attribute */
      console.log('Tag is :', articleTags);

      const articleTagsArray = articleTags.split(' ');                    /* [DONE]  split tags into array */
      console.log('Array is :', articleTagsArray);

      for (let tag of articleTagsArray){                                  /* [DONE]  START LOOP: for each tag */
        console.log('Single tag is :', tag);

        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';   /* [DONE]  generate HTML of the link */
        console.log('created HTML of the link :', linkHTML);

        html = html + linkHTML;                                           /* [DONE]  add generated code to html variable */
      }

      tagWrapper.innerHTML = html;                                        /* [DONE]  insert HTML of all the links into the tags wrapper */
      console.log('Tag Wrapper after loop is:', html);
    }
  };
  generateTags();


  const tagClickHandler = function (event){
    event.preventDefault();                                              /* [DONE]  prevent default action for this event */
    const clickedElement = this;                                         /* [DONE]  make new constant named "clickedElement" and give it the value of "this" */

    const href = clickedElement.getAttribute('href');                    /* [DONE]  make a new constant "href" and read the attribute "href" of the clicked element */
    console.log('debil:', href);

    /* make a new constant "tag" and extract tag from the "href" constant*/

    /* find all tag links with class active */
    /* START LOOP: for each active tag link */
    /* remove class active */
    /* END LOOP: for each active tag link */
    /* find all tag links with "href" attribute equal to the "href" consta
    /* START LOOP: for each found tag link */
    /* add class active */
    /* END LOOP: for each found tag link */
    /* execute function "generateTitleLinks" with article selector as argu*/
  };
  tagClickHandler ();

  const addClickListenersToTags = function(){
    /* find all links to tags */
    /* START LOOP: for each link */
    /* add tagClickHandler as event listener for that link */
    /* END LOOP: for each link */
  };
  addClickListenersToTags();

}


