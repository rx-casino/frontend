<script>
    let arre = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,3,2,1]
</script>


<div class="sc-gsFzgR ecYYiT">
    <div class="sc-cxpSdN kQfmQV tabs sc-cAhXWc fufAIq">
        <div class="tabs-navs">
            <button class="tabs-nav is-active">Latest bets</button>
            <button class="tabs-nav">Contest</button>
            <div class="bg" style="left: 0%; right: 50%;"></div>
        </div>


        <div class="tabs-view">
            <div class="sc-hmvnCu emIWso">
                <table class="sc-gWXbKe iUeetX table is-hover">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Player</th>
                            <th>Bet ID</th>
                            <th>Payout</th>
                            <th class="m-width">Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each arre as ar}
                        <tr>
                            <td class="game-name">
                                <img src="https://static.nanogames.io/assets/UltimateDice.e3fb51c3.png" class="game-icon" alt="">
                                <div class="name">Ultimate Dice</div>
                            </td>
                            <td>
                                <a class="sc-jUosCB iTDswZ user-info " href="/user/profile/584951">
                                    <div class="name">Ali Sefid Kari</div>
                                </a>
                            </td>
                            <td>11794023144502905</td>
                            <td>0.00x</td>
                            <td class="lose">
                                <div class="sc-Galmp erPQzq coin notranslate has-sign">
                                    <img class="coin-icon" alt="" src="https://nanogames.io/coin/NND.black.png">
                                    <div class="amount">
                                        <span class="amount-str">0.8192<span class="suffix">0000</span>
                                    </span>
                                </div>
                            </div>
                        </td>
                    </tr>
                        {/each}
                    
                    </tbody>
                </table>              
            </div>
        </div>

    </div>
</div>

