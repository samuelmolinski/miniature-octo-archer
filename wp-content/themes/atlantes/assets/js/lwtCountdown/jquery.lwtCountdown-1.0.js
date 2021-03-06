/*!
 * jQuery Countdown plugin v1.0
 * http://www.littlewebthings.com/projects/countdown/
 *
 * Copyright 2010, Vassilis Dourdounis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(n){n.fn.countDown=function(e){config={};n.extend(config,e);diffSecs=this.setCountDown(config);if(config.onComplete){n.data(n(this)[0],"callback",config.onComplete)}if(config.omitWeeks){n.data(n(this)[0],"omitWeeks",config.omitWeeks)}n("#"+n(this).attr("id")+" .digit").html('<div class="top"></div><div class="bottom"></div>');n(this).doCountDown(n(this).attr("id"),diffSecs,500);return this};n.fn.stopCountDown=function(){clearTimeout(n.data(this[0],"timer"))};n.fn.startCountDown=function(){this.doCountDown(n(this).attr("id"),n.data(this[0],"diffSecs"),500)};n.fn.setCountDown=function(e){var t=new Date;if(e.targetDate){t=new Date(e.targetDate.month+"/"+e.targetDate.day+"/"+e.targetDate.year+" "+e.targetDate.hour+":"+e.targetDate.min+":"+e.targetDate.sec+(e.targetDate.utc?" UTC":""))}else if(e.targetOffset){t.setFullYear(e.targetOffset.year+t.getFullYear());t.setMonth(e.targetOffset.month+t.getMonth());t.setDate(e.targetOffset.day+t.getDate());t.setHours(e.targetOffset.hour+t.getHours());t.setMinutes(e.targetOffset.min+t.getMinutes());t.setSeconds(e.targetOffset.sec+t.getSeconds())}var r=new Date;diffSecs=Math.floor((t.valueOf()-r.valueOf())/1e3);n.data(this[0],"diffSecs",diffSecs);return diffSecs};n.fn.doCountDown=function(r,i,s){$this=n("#"+r);if(i<=0){i=0;if(n.data($this[0],"timer")){clearTimeout(n.data($this[0],"timer"))}}secs=i%60;mins=Math.floor(i/60)%60;hours=Math.floor(i/60/60)%24;if(n.data($this[0],"omitWeeks")==true){days=Math.floor(i/60/60/24);weeks=Math.floor(i/60/60/24/7)}else{days=Math.floor(i/60/60/24)%7;weeks=Math.floor(i/60/60/24/7)}$this.dashChangeTo(r,"seconds_dash",secs,s?s:800);$this.dashChangeTo(r,"minutes_dash",mins,s?s:1200);$this.dashChangeTo(r,"hours_dash",hours,s?s:1200);$this.dashChangeTo(r,"days_dash",days,s?s:1200);$this.dashChangeTo(r,"weeks_dash",weeks,s?s:1200);n.data($this[0],"diffSecs",i);if(i>0){e=$this;t=setTimeout(function(){e.doCountDown(r,i-1)},1e3);n.data(e[0],"timer",t)}else if(cb=n.data($this[0],"callback")){n.data($this[0],"callback")()}};n.fn.dashChangeTo=function(e,t,r,i){$this=n("#"+e);for(var s=$this.find("."+t+" .digit").length-1;s>=0;s--){var o=r%10;r=(r-o)/10;$this.digitChangeTo("#"+$this.attr("id")+" ."+t+" .digit:eq("+s+")",o,i)}};n.fn.digitChangeTo=function(e,t,r){if(!r){r=800}if(n(e+" div.top").html()!=t+""){n(e+" div.top").css({display:"none"});n(e+" div.top").html(t?t:"0").slideDown(r);n(e+" div.bottom").animate({height:""},r,function(){n(e+" div.bottom").html(n(e+" div.top").html());n(e+" div.bottom").css({display:"block",height:""});n(e+" div.top").hide().slideUp(10)})}}})(jQuery)