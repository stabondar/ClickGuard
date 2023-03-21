import './select.scss'

export default class Select
{
    constructor()
    {
        // Iterate over each select element
        $('select').each(function() {

            // Cache the number of options
            let self = $(this)
            let numberOfOptions = $(this).children('option').length
        
            // Hides the select element
            self.addClass('s-hidden')
        
            // Wrap the select element in a div
            self.wrap('<div class="select"></div>')
        
            // Insert a styled div to sit over the top of the hidden select element
            self.after('<div class="styledParent"><div class="styledSelect"></div></div>')
            
            // Cache the styled div
            let parent = self.next('.styledParent')
            let styledSelect = parent.find('.styledSelect')
        
            // Show the first select option in the styled div
            styledSelect.text(self.children('option').eq(0).text())
        
            // Insert an unordered list after the styled div and also cache the list
            let list = $('<ul />', {
            'class': 'options'
            }).insertAfter(styledSelect)
        
            // Insert a list item into the unordered list for each select option
            for (let i = 1; i < numberOfOptions; i++) {
                $('<li />', {
                    text: self.children('option').eq(i).text(),
                    rel: self.children('option').eq(i).val()
                }).appendTo(list)
            }
        
            // Cache the list items
            let listItems = list.children('li')
        
            // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
            parent.click(function(e) {
                e.stopPropagation()
                if(!$(this).hasClass('active'))
                {
                    $(this).find('ul.options').addClass('active')
                } else 
                {
                    $(this).find('ul.options').removeClass('active')   
                }
                $(this).toggleClass('active')//.find('ul.options').toggle()
            })
        
            // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
            // Updates the select element to have the value of the equivalent option
            listItems.click(function(e) {
                e.stopPropagation()
                styledSelect.text($(this).text())
                parent.removeClass('active')
                self.val($(this).attr('rel'))
                list.removeClass('active')  
                styledSelect.addClass('checked')

                // Remove error
                self.add(parent).removeClass('error')
                self.siblings('label').addClass('hide')
                $(this).addClass('checked').siblings().removeClass('checked')
            /* alert(self.val()) Uncomment this for demonstration! */
            })
        
            // Hides the unordered list when clicking outside of it
            $(document).click(function() {
                parent.removeClass('active')
                list.removeClass('active')  
            })
        
        })

        $('.select-states').find('ul').attr('data-lenis-prevent', '')
    }
}