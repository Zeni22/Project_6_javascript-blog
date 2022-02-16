{
  'use strict';

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  //CLASSES
  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log(this);
    console.log('Link was clicked!');
    console.log(event);

    /*[DONE]remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /*[DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
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
  };


  //TITLE LINKS
  const  generateTitleLinks = function () {

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    console.log('Remove contents title list: ', document.querySelector(optTitleListSelector));

    /* [DONE] find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    /* [DONE] for each article: */
    for (let article of articles) {

      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');
      console.log('Found article is :', articleId);

      /* [DONE] find the title element and  get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('Found article title is :', articleId);

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('created HTML of the link :', linkHTML);

      /* [DONE] insert link into html variable */
      html = html + linkHTML;
      console.log('HTML after loop:', html);
    }

    /* [DONE] insert link into titleList */
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };
  generateTitleLinks();


  //TAGS
  const generateTags = function() {

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find tags wrapper */
      const tagWrapper = article.querySelector(optArticleTagsSelector);
      console.log('tag Wrapper is:', tagWrapper);

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log('Tag is :', articleTags);

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log('Array is :', articleTagsArray);

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray){
        console.log('Single tag is :', tag);

        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        console.log('created HTML of the link :', linkHTML);

        /* add generated code to html variable */
        html = html + linkHTML;
      }

      /* insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = html;
      console.log('Tag Wrapper after loop is:', html);
    }
  };
  generateTags();

  const tagClickHandler = function (event){

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */


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

  const addClickListenersToTags = function(){
    /* find all links to tags */
    /* START LOOP: for each link */
    /* add tagClickHandler as event listener for that link */
    /* END LOOP: for each link */
  };
  addClickListenersToTags();

}


