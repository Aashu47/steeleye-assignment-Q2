
// getting plan text

function stripHtmlTags(htmlString) {
    return htmlString.replace(/<[^>]*>/g, '');
}
const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>you';
const plainText = stripHtmlTags(htmlContent);

//getting plain text position

function plainTextPositions(plainText) {
    const words = plainText.split(/\s+/);
    const positions = [];
    let currentPosition = 0;

    for (const word of words) {
        const start = plainText.indexOf(word, currentPosition);
        const end = start + word.length - 1;
        
        if (start !== -1) {
            positions.push({ start, end });
            currentPosition = end + 2; 
        }
    }

    return positions;
}

//highlighting content


function highlightHTMLContent(htmlContent,wordPositions ) {
    let result = htmlContent;
    for (const position of wordPositions) {
      const start = position.start ; 
      const end = position.end ;
      const highlightedHtml = htmlContent.slice(0, start) + '<mark>' + htmlContent.slice(start, end + 1) + "</mark>" + htmlContent.slice(end + 1);
      result = highlightedHtml;
    }
    return result;
  }


  const wordPositions = plainTextPositions(plainText);  
  const TextPositions = [
    {
      start: 8,
      end: 15,
    }

  ];
  
  const highlightedHtml = highlightHTMLContent(htmlContent, TextPositions);
  
  console.log(highlightedHtml);
  