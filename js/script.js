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
  } ;
  generateTags();

  const tagClickHandler = function (event){

    /* prevent default action for this event */
    /* make new constant named "clickedElement" and give it the value of "
    /* make a new constant "href" and read the attribute "href" of the cli
    /* make a new constant "tag" and extract tag from the "href" constant
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


